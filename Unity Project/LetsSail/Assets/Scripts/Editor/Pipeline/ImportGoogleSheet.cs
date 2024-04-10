using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using System.Threading.Tasks;

public static class ImportGoogleSheet
{
    private const string URL_FORMAT = "https://docs.google.com/spreadsheet/ccc?key={0}&usp=sharing&output=csv";

    private static char[] LEGAL_SEPARATOR_LINE = { '\n' };
    private static char[] LEGAL_SEPARATOR_FIELD = { ',' };

    private static async Task<string> GetText(string url)
    {
        using (UnityWebRequest www = UnityWebRequest.Get(url))
        {
            await www.SendWebRequest();

            if (www.result != UnityWebRequest.Result.Success)
            {
                Debug.LogError($"Error getting {url}: {www.error}");
            }
            else
            {
                // Show results as text
                Debug.Log($"Downloaded: {www.downloadHandler.text}");

                // Or retrieve results as binary data
                return www.downloadHandler.text;
            }
        }

        return null;
    }

    // TODO handle commas and quotations
    public static async Task<string[,]> Fetch(string id)
    {
        var url = string.Format(URL_FORMAT, id);

        var csv = await GetText(url);

        var lines = csv.Split(LEGAL_SEPARATOR_LINE, System.StringSplitOptions.RemoveEmptyEntries);

        var keyRow = -1;

        for (var i = 0; i < lines.Length - 1; i++)
        {
            if (lines[i].Contains("***"))
            {
                keyRow = i + 1;
                break;
            }
        }

        if (keyRow < 0)
        {
            Debug.LogError("Spreadsheet must have *** before the row with the key names.");
            return null;
        }

        var keys = lines[keyRow].Split(LEGAL_SEPARATOR_FIELD);

        var output = new string[lines.Length - keyRow, keys.Length];

        for (var i = 0; i < keys.Length; i++)
        {
            output[0, i] = keys[i];
        }

        for (var j = 1; j < output.GetLength(0); j++)
        {
            var values = lines[keyRow + j].Split(LEGAL_SEPARATOR_FIELD);

            for (var i = 0; i < output.GetLength(1); i++)
            {
                output[j, i] = values[i];
            }
        }

        return output;
    }
}
