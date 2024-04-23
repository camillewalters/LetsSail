using UnityEngine;
using UnityEngine.UI;
using System.IO;
using TMPro;

public class TextFromFile : MonoBehaviour
{
    public TMP_Text textUI;
    public string filePath;

    private string[] lines;
    private int currentLineIndex = 0;

    void Start()
    {
        // Open the text file
        var reader = new StreamReader(filePath);
        // Read all lines from the file
        lines = reader.ReadToEnd().Split('\n');
        // Close the reader
        reader.Close();

        // Display the first line
        DisplayCurrentLine();
    }

    void DisplayCurrentLine()
    {
        if (currentLineIndex < lines.Length)
        {
            // Update the text UI element with the current line
            textUI.text = lines[currentLineIndex];
        }
        else
        {
            Debug.Log("End of file reached.");
            //probably would do something like deactivating the text element, triggering start of the next thing, etc. 
        }
    }

    public void ShowNextLine()
    {
        currentLineIndex++;
        DisplayCurrentLine();
    }

    //TODO: add a "skip" option?
}
