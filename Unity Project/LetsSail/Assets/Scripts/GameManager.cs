using System;
using System.Collections.Generic;
using System.Linq;
using TMPro;
using UnityEngine;
using Random = System.Random;

[DisallowMultipleComponent]
public class GameManager : MonoBehaviour
{
    private const string IntroFilePath = "Assets/Scripts/UI Text/IntroText.txt";
    private const string LevelInstructionsFilePath = "Assets/Scripts/UI Text/Level1Instructions.txt";
    private const string LevelHintsFilePath = "Assets/Scripts/UI Text/Level1Hints.txt";
    private const string EndOfDayMessage = "Thank you for the great work! This is a good stopping point for today.";
    
    public ScriptManager scriptManager;
    public TextMeshPro textBox; // TODO: remove

    // TODO: is this the best way to do it?
    public List<GameObject> objectsToHighlight;
    
    private List<int> _indexList;
    private int _taskCount = 0;
    private bool _tasksComplete = false;
    private Camera _currentCamera;
    
    private void Start()
    {
        scriptManager.ReadFile(IntroFilePath);
        
        var random = new Random();
        _indexList = Enumerable.Range(0, objectsToHighlight.Count).ToList();
        _indexList = _indexList.OrderBy(x => random.Next()).ToList();

        string s = _indexList.Aggregate("", (current, ind) => current + ind.ToString());
        Debug.Log($"order is: {s}");

        DisplayMessage();
        
        // TODO: Replace with Camera logic, get the current camera
        _currentCamera = Camera.main;
    }

    private void Update()
    {
        // Only in Task Phase
        if (!scriptManager.IntroComplete)
            return;
        
        if (Input.GetMouseButtonDown(0))
        {
            var mousePosition = Input.mousePosition;
            var ray = _currentCamera.ScreenPointToRay(mousePosition);
            if (Physics.Raycast(ray, out RaycastHit hit))
            {
                if (hit.collider.gameObject == objectsToHighlight[_indexList[_taskCount]])
                {
                    Debug.Log("success!!");
                    TaskSuccessfullyCompleted();
                }
            }
        }
    }

    // TODO: Connect temp UI setup to UI Manager
    // Temporarily called from the button
    // Later we will call this from the UI manager
    // And also change the text in the chatbox

    public void TaskSuccessfullyCompleted()
    {
        DisplaySuccessMessage();
        
        // The counter is incremented once the user successfully finds the object
        _taskCount++;
        
        if (_taskCount >= _indexList.Count)
        {
            _taskCount = 0;
            _tasksComplete = true;
        }
    }

    private void DisplaySuccessMessage()
    {
        textBox.text = scriptManager.SuccessMessage;
    }

    public void DisplayMessage()
    {
        // If we're in Intro Phase
        if (!scriptManager.IntroComplete)
        {
            DisplayIntroLine();
            
            // Only after Intro Phase is done
            if (scriptManager.IntroComplete)
            {
                // Start Task Phase
                TaskPhase();
        
                // Read Tasks and Hints
                scriptManager.ReadFiles(LevelInstructionsFilePath, LevelHintsFilePath);
            }
            
            return;
        }

        // If Task Phase is completed successfully and we're at the end of the day 
        if (_tasksComplete)
        {
            textBox.text = EndOfDayMessage;
            return; 
        }
        
        // Else we're in the Task Phase
        DisplayLevelLine();
    }

    private void DisplayIntroLine()
    {
        textBox.text = scriptManager.GetNextLine();
        // Debug.Log(scriptManager.GetNextLine());
    }

    private void DisplayLevelLine()
    {
        var taskInfo = scriptManager.GetLinesByIndex(_indexList[_taskCount]);
        textBox.text = taskInfo.Instruction;
    }

    public void DisplayHint()
    {
        if (_tasksComplete)
        {
            return; 
        }
        
        var taskInfo = scriptManager.GetLinesByIndex(_indexList[_taskCount]);
        textBox.text = taskInfo.Hint;
    }

    public void SkipIntro()
    {
        if (scriptManager.IntroComplete)
            return;
        
        // Skip reading the rest of the intro and set IntroComplete to true
        scriptManager.SkipIntro();
        
        // Start Task Phase
        TaskPhase();
        
        // Read Tasks and Hints
        scriptManager.ReadFiles(LevelInstructionsFilePath, LevelHintsFilePath);
        
        // Start displaying for Task Phase
        DisplayMessage();
    }

    private void TaskPhase()
    {
        // Highlight all the objects 
        // TODO: We're supposed to skip highlighting the left and right of the boat for certain angles, figure that out 
        foreach (var obj in objectsToHighlight)
        {
            obj.AddComponent<Outline>();
            obj.AddComponent<ChangeOutline>();
        }
    }
}
