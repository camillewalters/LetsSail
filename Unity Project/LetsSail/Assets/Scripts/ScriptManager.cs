using UnityEngine;
using System.IO;

public class ScriptManager : MonoBehaviour
{
    private string[] lines;
    private string[] hintLines;
    private int currentLineIndex = 0;
    public int NumberOfLinesInFile => lines.Length; //watch for off by 1 errors when using this

    private const string successMessage = "Glad that it's intact";
    public string SuccessMessage => successMessage;


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
        hintLines = reader.ReadToEnd().Split("\n");
        hintReader.Close();

        currentLineIndex = 0;

        if (lines.Length > 0 && hintLines.Length == lines.Length)
        {
            return true;
        }
        return false;
    }

    public string GetInstructionLineByIndex(int index)
    {
        return DisplayLine(index);
    }

    public string GetHintLineByIndex(int index)
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

    /// <summary>
    /// Use this with the intro type scripts
    /// </summary>
    /// <returns></returns>
    public string GetNextLine()
    {
        var line = DisplayLine(currentLineIndex);
        currentLineIndex++;
        return line;
    }
}
