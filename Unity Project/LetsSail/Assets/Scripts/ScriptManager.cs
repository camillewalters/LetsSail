using UnityEngine;

public class ScriptManager : MonoBehaviour
{
    // NOTE:
    // Intro lines that have "SKIPPER" at the beginning will trigger the Skipper chat box mode 
    // Intro lines also end with a number corresponding to a CameraIndex
    
    private string[] introLines = 
    {
        "A storm pushed you and your team to this deserted island.3",
        "As a leader, your skipper is forming a plan.4",
        "SKIPPERThe island only has food that can last us for four days. We need to sail to another island to get more supplies before we sail back home.4",
        "SKIPPERLuckily, the hull looks fine.2"
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
        return index < introLines.Length ? introLines[index] : null;
    }
    
    string GetTaskLineByIndex(int index)
    {
        return index < taskLines.Length ? taskLines[index] : null;
    }

    string GetHintLineByIndex(int index)
    {
        return index < hintLines.Length ? hintLines[index] : null;
    }

    public void SkipIntro()
    {
        currentLineIndex = introLines.Length;
        introComplete = true;
    }
}
