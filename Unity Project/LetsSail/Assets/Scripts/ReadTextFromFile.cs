using UnityEngine;
using UnityEngine.UI;
using System.IO;
using TMPro;

public class TextFromFile : MonoBehaviour
{
    private string[] lines;
    private int currentLineIndex = 0;
    public int numberOfLinesInFile => lines.Length; //watch for off by 1 errors when using this

    private const string successMessage = "Glad that it's intact";
    public string SuccessMessage => successMessage;



    string DisplayLine(int index)
    {
        if (index < lines.Length)
        {
            return lines[currentLineIndex];
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


    public string GetLineByIndex(int index)
    {
        return DisplayLine(index);
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
