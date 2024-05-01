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
    
    private List<int> _indexList;
    private int _taskCount = 0;
    private bool _tasksComplete = false;
    
    private void Start()
    {
        scriptManager.ReadFile(IntroFilePath);
        // scriptManager.ReadFiles(LevelInstructionsFilePath, LevelHintsFilePath);
        
        var random = new Random();
        _indexList = new List<int> { 0, 1, 2, 3, 4 };
        _indexList = _indexList.OrderBy(x => random.Next()).ToList();
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
            
            // Only after Intro Phase is done read the tasks and hints 
            if (scriptManager.IntroComplete)
                scriptManager.ReadFiles(LevelInstructionsFilePath, LevelHintsFilePath);
            
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
    
    public void DisplayIntroLine()
    {
        textBox.text = scriptManager.GetNextLine();
        // Debug.Log(scriptManager.GetNextLine());
    }
    
    public void DisplayLevelLine()
    {
        var taskInfo = scriptManager.GetLinesByIndex(_indexList[_taskCount]);
        textBox.text = taskInfo.Instruction;
    }

    public void DisplayHint()
    {
        var taskInfo = scriptManager.GetLinesByIndex(_indexList[_taskCount]);
        textBox.text = taskInfo.Hint;
    }

    public void SkipIntro()
    {
        // Skip reading the rest of the intro and set IntroComplete to true
        scriptManager.SkipIntro();
        
        // Read Tasks and Hints
        scriptManager.ReadFiles(LevelInstructionsFilePath, LevelHintsFilePath);
        
        // Start displaying for Task Phase
        DisplayMessage();
    }
}
