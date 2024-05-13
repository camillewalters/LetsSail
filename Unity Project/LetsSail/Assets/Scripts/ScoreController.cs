using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;
using UnityEngine.SceneManagement;

public class ScoreController : MonoBehaviour
{
    public int minScore = 0;
    public int maxScore = 100;
    public TMPro.TextMeshProUGUI tmp;
    
    private int score;
    ReactManager reactManager;


    [DllImport("__Internal")]
    private static extern void NewScore(int score);
    void Start()
    {
        InvokeRepeating("UpdateScore", 3f, 4f);
    }

    void UpdateScore()
    {
        score = Random.Range(minScore, maxScore);
        tmp.text = "Score: " + score.ToString();
        SendScoreToFrontEnd();
    }


    public void SendScoreToFrontEnd()
    {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
    NewScore(score);
#endif
    }
 }
