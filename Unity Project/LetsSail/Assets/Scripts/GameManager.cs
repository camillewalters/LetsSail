using System.Collections.Generic;
using System.Linq;
using TMPro;
using UnityEngine;
using Random = System.Random;

/*
 * Some info about terms in this script:
 * Chat box modes:
 *      - Normal mode: Normal blue chat box on the UI.
 *      - Skipper mode: Yellow chat box with the skipper icon on the UI.
 * Level Phases
 *      - Intro Phase: Displays the Intro text for the level line by line. Uses the Skip Intro button.
 *      - Task Phase: Meat of the level. Displays instructions, hint, handles object selection.
 *      - End of Day Phase: End of the level. After all tasks have been completed the Skipper says 1 message.
 */

[DisallowMultipleComponent]
public class GameManager : MonoBehaviour
{
    private const string EndOfDayMessage = "Thank you for the great work! This is a good stopping point for today.";

    public UIManager uiManager;
    public ScriptManager scriptManager;
    public CameraManager cameraManager;
    public TextMeshPro textBox; // TODO: remove during cleanup
    public Camera brainCamera;

    // TODO: is this the best way to do it?
    public List<GameObject> objectsToHighlight;
    
    private List<int> _indexList;
    private int _taskCount = 0;
    private bool _tasksComplete = false;
    private int _missCount = 0;
    
    private void Start()
    {
        scriptManager.ReadFile();
        
        var random = new Random();
        _indexList = Enumerable.Range(0, objectsToHighlight.Count).ToList();
        _indexList = _indexList.OrderBy(x => random.Next()).ToList();

        string s = _indexList.Aggregate("", (current, ind) => current + ind.ToString());
        Debug.Log($"order is: {s}");

        DisplayMessage();
        
        // TODO: Replace with Camera logic, get the current camera
        // _currentCamera = cameraManager.currentCamera;
    }

    private void Update()
    {
        // Only in Task Phase
        if (!scriptManager.IntroComplete)
            return;
        
        if (Input.GetMouseButtonDown(0))
        {
            var mousePosition = Input.mousePosition;
            var ray = brainCamera.ScreenPointToRay(mousePosition);
            if (Physics.Raycast(ray, out RaycastHit hit))
            {
                if (hit.collider.gameObject == objectsToHighlight[_indexList[_taskCount]])
                {
                    Debug.Log("success!!");
                    _missCount = 0;
                    TaskSuccessfullyCompleted();
                }
                else
                {
                    _missCount++;
                }
            }

            // If the user clicks on a wrong part at least 3 times show a hint
            if (_missCount >= 3)
            {
                DisplayHint();
            }
        }
    }

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
        // textBox.text = scriptManager.SuccessMessage;
        uiManager.DisplayMessage(scriptManager.SuccessMessage);
        uiManager.ToggleContinueButton(true);
    }

    public void DisplayMessage()
    {
        // If we're in Intro Phase
        if (!scriptManager.IntroComplete)
        {
            uiManager.ToggleCameraButtons(false);
            bool displayed = DisplayIntroLine();
            
            // Only after Intro Phase is done
            if (!displayed)
            {
                EndOfIntroPhaseTasks();
            }
            
            return;
        }

        // If Task Phase is completed successfully and we're at the end of the day 
        if (_tasksComplete)
        {
            uiManager.ToggleCameraButtons(false);
            // textBox.text = EndOfDayMessage;
            uiManager.DisplayMessage(EndOfDayMessage);
            return; 
        }
        
        // Else we're in the Task Phase
        uiManager.ToggleCameraButtons(true);
        uiManager.ToggleContinueButton(false);
        DisplayLevelLine();
    }

    private bool DisplayIntroLine()
    {
        // textBox.text = scriptManager.GetNextLine();
        var line = scriptManager.GetNextLine();

        // we've hit the end of intro
        if (line == null) return false;
        
        uiManager.DisplayMessage(line);
        return true;

    }

    private void DisplayLevelLine()
    {
        var taskInfo = scriptManager.GetLinesByIndex(_indexList[_taskCount]);
        // textBox.text = taskInfo.Instruction;
        uiManager.DisplayMessage(taskInfo.Instruction);
    }

    public void DisplayHint()
    {
        if (_tasksComplete)
        {
            return; 
        }
        
        var taskInfo = scriptManager.GetLinesByIndex(_indexList[_taskCount]);
        // textBox.text = taskInfo.Hint;
        uiManager.DisplayMessage(taskInfo.Hint);
    }

    public void SkipIntro()
    {
        if (scriptManager.IntroComplete)
            return;
        
        // Skip reading the rest of the intro and set IntroComplete to true
        scriptManager.SkipIntro();
        
        // End Intro Phase
        EndOfIntroPhaseTasks();
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

    private void EndOfIntroPhaseTasks()
    {
        // Start Task Phase
        TaskPhase();
        
        // Read Tasks and Hints
        scriptManager.ReadFiles();
                
        // Disable Skip Intro button since we are entering Task Phase
        uiManager.ToggleSkipButton(false);
                
        // Skip to Skipper mode, because everything here on is said by the Skipper
        uiManager.SwitchChatBoxTypes();
        
        // Start displaying for Task Phase
        DisplayMessage();
    }
}


/*
Priyanka's To Do's 
- Make GameManager and ScriptManager Prefabs (maybe 1 prefab w all the managers?)
- Handle Skipper mode in the intro lines
- UI text size issue
- Camera buttons integration
- Add the actual chopped up ship
- Port and Starboard highlight only in certain camera angles 
- Clean this script (esp the textBox object its pissing me off)
*/
