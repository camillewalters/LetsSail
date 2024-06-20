// NOTE:
// Change this level define before building each level
#define LEVEL1

using UnityEngine;

public class ScriptManager : MonoBehaviour
{
#if LEVEL1
    private LevelOneScript _levelScript = new LevelOneScript();
#elif LEVEL2
    private LevelTwoScript _levelScript = new LevelTwoScript();
#elif LEVEL3
    private LevelThreeScript _levelScript = new LevelThreeScript();
#endif
    
    private int currentLineIndex = 0;

    private const string successMessage = "Glad that it's intact.";
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
        return index < _levelScript.introLines.Length ? _levelScript.introLines[index] : null;
    }
    
    string GetTaskLineByIndex(int index)
    {
        return index < _levelScript.taskLines.Length ? _levelScript.taskLines[index] : null;
    }

    string GetHintLineByIndex(int index)
    {
        return index < _levelScript.hintLines.Length ? _levelScript.hintLines[index] : null;
    }

    public void SkipIntro()
    {
        currentLineIndex = _levelScript.introLines.Length;
        introComplete = true;
    }
}
