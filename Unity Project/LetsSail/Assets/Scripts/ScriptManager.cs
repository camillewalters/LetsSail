using UnityEngine;
using System.IO;

public class ScriptManager : MonoBehaviour
{
    private string[] lines;
    private string[] hintLines;
    private int currentLineIndex = 0;
    public int NumberOfLinesInFile => lines.Length;

    private const string successMessage = "Glad that it's intact";
    public string SuccessMessage => successMessage;

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

    string DisplayLine(int index)
    {
        if (index < lines.Length)
        {
            return lines[index];
        }
        else
        {
            return null;
        }
    }

    public bool ReadFile(string filePath)
    {        
        var reader = new StreamReader(filePath);
        lines = reader.ReadToEnd().Split('\n');
        reader.Close();
        currentLineIndex = 0;

        if (lines.Length > 0) return true;

        return false;
    }

    public bool ReadFiles(string filePath, string hintFilePath)
    {
        var reader = new StreamReader(filePath);
        lines = reader.ReadToEnd().Split('\n');
        reader.Close();

        var hintReader = new StreamReader(hintFilePath);
        hintLines = hintReader.ReadToEnd().Split("\n");
        hintReader.Close();

        currentLineIndex = 0;

        if (lines.Length > 0 && hintLines.Length == lines.Length)
        {
            return true;
        }
        return false;
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

    public BoatPartStrings GetLinesByIndex(int index)
    {
        
        var strings = new BoatPartStrings(DisplayLine(index),GetHintLineByIndex(index));
        return strings;

    }

    public string GetNextLine()
    {
        var line = DisplayLine(currentLineIndex);
        currentLineIndex++;
        return line;
    }
}
