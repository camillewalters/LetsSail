using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEditor.Build.Content;
using UnityEngine.UI;
using UnityEngine.TextCore.Text;

public class UIManager : MonoBehaviour
{
    public TMP_Text textBox;
    public GameObject chatbox;
    public GameObject skipperChatbox;

    
    public void DisplayMessage(string message)
    {
        textBox.text = message;
    }
    public void ClearTextBox()
    {
        textBox.text = "";
    }

    public void ChangeToTopCamera()
    {
        //something like GameManager.ChangeCameraAngle(0)
    }

    public void ChangeToRightCamera()
    {
        //something like GameManager.ChangeCameraAngle(1)
    }
    public void ChangeToLeftCamera() 
    {
        //something like GameManager.ChangeCameraAngle(2)
    }

    //gamemanager method:
    //ChangeCameraAngle(int index)
    //{
    //    CameraManager.ChangeCameraPosition(index);
    //}


    public void ChangeTextBoxToSkipper()
    {
        chatbox.SetActive(false);
        skipperChatbox.SetActive(true);
    }

    public void ChangeTextBoxToNormal()
    {
        chatbox.SetActive(true);
        skipperChatbox.SetActive(false);
    }

    public void CloseChatBox()
    {
        chatbox.SetActive(false);
    }
    
    public void OpenChatBox()
    {
        chatbox.SetActive(true);
    }

    public void SkipIntro()
    {

    }

    public void Continue()
    {

    }
        

}
