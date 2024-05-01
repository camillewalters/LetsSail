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

    //Priyanka: gamemanager method would be something like:
    //ChangeCameraAngle(int index)
    //{
    //    CameraManager.ChangeCameraPosition(index);
    //}

    /// <summary>
    /// Change from normal to skipper, or from skipper to normal
    /// </summary>
    public void SwitchChatBoxTypes()
    {
        if(chatbox.activeSelf)
        {
            CloseChatBox() ;
            OpenSkipperChatBox() ;
        }
        else if(skipperChatbox.activeSelf)
        {
            CloseChatBox();
            OpenChatBox();
        }
    }

    /// <summary>
    /// Will close whichever text box is open (either the normal one or the skipper one). Make sure they have the "Chatbox" tag in the scene
    /// </summary>
    public void CloseChatBox()
    {
        var box = GameObject.FindWithTag("Chatbox");
        if (box != null)
        {
            box.SetActive(false);
        }
    }
    
    /// <summary>
    /// Opens normal chat box
    /// </summary>
    public void OpenChatBox()
    {
        chatbox.SetActive(true);
    }

    /// <summary>
    /// Opens Skipper chat box
    /// </summary>
    public void OpenSkipperChatBox()
    {
        skipperChatbox.SetActive(true) ;
    }

    /// <summary>
    /// This will disable 1 or 0 skip buttons (make sure it has the "SkipButton" tag)
    /// </summary>
    public void DisableSkipButton()
    {
        var button = GameObject.FindWithTag("SkipButton");
        if(button != null )
        {
            button.SetActive(false);
        }
    }

    public void SkipIntro()
    {
        //TODO: call method in Game manager
    }

    public void Continue()
    {
        //TODO: call method in Game Manager
    }
        

}
