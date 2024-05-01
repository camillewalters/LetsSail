using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEditor.Build.Content;
using UnityEngine.UI;
using UnityEngine.TextCore.Text;
using Unity.VisualScripting;

public class UIManager : MonoBehaviour
{
    public TMP_Text textBox;
    public GameObject overallChatbox;
    public GameObject normalChatbox;
    public GameObject skipperChatbox;
    public GameObject cameraButtons;
    public GameObject skipIntroButton;
    public GameObject continueButton;

    
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
        if(normalChatbox.activeSelf)
        {
            normalChatbox.SetActive(false);
            OpenSkipperChatBox() ;
        }
        else if(skipperChatbox.activeSelf)
        {
            skipperChatbox.SetActive(false);
            OpenNormalChatBox();
        }
    }

    /// <summary>
    /// Will close whichever text box is open (either the normal one or the skipper one). Make sure they have the "Chatbox" tag in the scene
    /// </summary>
    public void CloseChatBox()
    {
        overallChatbox.SetActive(false);
    }
    
    /// <summary>
    /// Opens normal chat box
    /// </summary>
    public void OpenNormalChatBox()
    {
        overallChatbox.SetActive(true);
        normalChatbox.SetActive(true);
        skipperChatbox.SetActive(false);
    }

    /// <summary>
    /// Opens Skipper chat box
    /// </summary>
    public void OpenSkipperChatBox()
    {
        overallChatbox.SetActive(true);
        normalChatbox.SetActive(false);
        skipperChatbox.SetActive(true) ;
    }

    public void ToggleSkipButton(bool isEnabled)
    {
        skipIntroButton.SetActive(isEnabled);
    }

    public void ToggleContinueButton(bool isEnabled)
    {
        continueButton.SetActive(isEnabled);
    }

    public void ToggleCameraButtons(bool isEnabled)
    {
        cameraButtons.SetActive(isEnabled);
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
