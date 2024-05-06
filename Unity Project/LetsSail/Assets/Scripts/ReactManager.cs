using UnityEngine;
using System.Runtime.InteropServices;

public class ReactManager : MonoBehaviour
{
    //Declaration of methods in Assets/Plugins/WebGL/React.jslib
    [DllImport("__Internal")]
    private static extern void LevelComplete();

    [DllImport("__Internal")]
    private static extern void NewScore(int score);

    public void SendLevelCompleteToFrontEnd()
    {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
        LevelComplete();
#endif
    }
    public void SendScoreToFrontEnd(int score)
    {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
    NewScore(score);
#endif
    }
}
