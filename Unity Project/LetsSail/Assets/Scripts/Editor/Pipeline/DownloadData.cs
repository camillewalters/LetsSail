using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

public static class DownloadData
{
    private const string TerminologyDataKey = "15Z9TZLnjnOny7ISMLDbdMCeyOBeOYGwq-dosWLUmnAw";

    [MenuItem("Sail/Download Data")]
    private static async void ExecuteDataDownload()
    {
        var terminologyTable = await ImportGoogleSheet.Fetch(TerminologyDataKey);

        if (terminologyTable != null)
        {
            ImportTerminologyData(terminologyTable);
        }
    }

    private static void ImportTerminologyData(string[,] data)
    {
        // TODO write this into a scriptable object.
    }
}
