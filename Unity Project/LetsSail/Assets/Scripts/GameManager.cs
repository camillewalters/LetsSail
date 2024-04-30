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
    
    private void Start()
    {
        scriptManager.ReadFile(IntroFilePath);
        scriptManager.ReadFiles(LevelInstructionsFilePath, LevelHintsFilePath);
        
        var random = new Random();
        _indexList = new List<int> { 0, 1, 2, 3, 4 };
        _indexList = _indexList.OrderBy(x => random.Next()).ToList();
    }

    // TODO: Connect temp UI setup to UI Manager
    // Temporarily called from the button
    // Later we will call this from the UI manager
    // And also change the text in the chatbox

    public void DisplayMessage()
    {
        // if we're in intro phase
        
        // else if were in task phase
        // alternate instruction and success
        // hint button is separate
        
        // finally end of day phase 
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
        
        _taskCount++;
        if (_taskCount >= _indexList.Count)
        {
            _taskCount = 0;
        }
    }

    public void DisplaySuccessMessage()
    {
        textBox.text = scriptManager.SuccessMessage;
    }
}
