using UnityEngine;

public class ScriptManager : MonoBehaviour
{
    private string[] introLines = 
    {
        "A storm pushed you and your team to this deserted island.",
        "As a leader, your skipper is forming a plan.",
        "The island only has food that can last us for four days. We need to sail to another island to get more supplies before we sail back home.",
        "Luckily, the hull looks fine."
    };
    private string[] taskLines =
    {
        "Can you go to the Bow and see if everything looks ok?", 
        "Can you go to the Stern and see if everything looks ok?", 
        "Can you go to the Port and see if everything looks ok?",
        "Can you go to the Starboard  and see if everything looks ok?",
        "Can you go to the Cockpit and see if everything looks ok?"
    };
    private string[] hintLines = 
    {
        "Look for Bow.The front of the boat.",
        "Look for Stern.The back of the boat.",
        "Look for Port.The left side of the boat when you're facing the bow.",
        "Look for Starboard .The right side of the boat when you're facing the bow.",
        "Look for Cockpit.The area towards the stern where the crew operates the boat, managing steering, sail controls, and navigation."
    };
    private int currentLineIndex = 0;

    private const string successMessage = "Glad that it's intact";
    public string SuccessMessage => successMessage;

    private bool introComplete = false;
    public bool IntroComplete => introComplete;

    public struct BoatPartStrings
    {
        public string Instruction;
        public string Hint;

        public BoatPartStrings(string instruction, string hint)
        {
            this.Instruction = instruction;
            this.Hint = hint;
        }
    }

    // For the Intro Phase 
    public bool ReadFile() // TODO: make void 
    {
        currentLineIndex = 0;

        if (introLines.Length > 0) return true;

        return false;
    }

    // For the Task Phase
    public bool ReadFiles()  // TODO: make void 
    {
        currentLineIndex = 0;

        if (taskLines.Length > 0 && hintLines.Length == taskLines.Length)
        {
            return true;
        }
        return false;
    }

    public BoatPartStrings GetLinesByIndex(int index)
    {
        
        var strings = new BoatPartStrings(GetTaskLineByIndex(index),GetHintLineByIndex(index));
        return strings;

    }

    public string GetNextLine()
    {
        var line = GetIntroLineByIndex(currentLineIndex);
        currentLineIndex++;

        if (line == null)
            introComplete = true;
        
        return line;
    }
    
    string GetIntroLineByIndex(int index)
    {
        if (index < introLines.Length)
        {
            return introLines[index];
        }
        else
        {
            return null;
        }
    }
    
    string GetTaskLineByIndex(int index)
    {
        if (index < taskLines.Length)
        {
            return taskLines[index];
        }
        else
        {
            return null;
        }
    }

    string GetHintLineByIndex(int index)
    {
        if (index < hintLines.Length)
        {
            return hintLines[index];
        }
        else
        {
            return null;
        }
    }

    public void SkipIntro()
    {
        currentLineIndex = introLines.Length;
        introComplete = true;
    }

    /*
    public bool LinesRemaining()
    {
        return currentLineIndex < lines.Length;
    }
    */
}
