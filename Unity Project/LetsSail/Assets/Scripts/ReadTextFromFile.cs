using UnityEngine;
using UnityEngine.UI;
using System.IO;
using TMPro;

public class TextFromFile : MonoBehaviour
{
    //public Text textUI;
    public TMP_Text textUI;
    public string filePath; // Path to your text file

    private StreamReader reader;
    private string[] lines;
    private int currentLineIndex = 0;

    void Start()
    {
        // Open the text file
        reader = new StreamReader(filePath);
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
            // Reached the end of the file
            Debug.Log("End of file reached.");
        }
    }

    public void ShowNextLine()
    {
        currentLineIndex++;
        DisplayCurrentLine();
    }
}
