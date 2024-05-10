using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
// using UnityEditor.Build.Content;
using UnityEngine.UI;
using UnityEngine.TextCore.Text;
using Unity.VisualScripting;

public class UIManager : MonoBehaviour
{
    public GameManager gameManager;
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

    public void ChangeToBirdseyeCamera()
    {
        //something like GameManager.ChangeCameraAngle(CameraManager.BirdseyeCameraIndex)
    }

    public void ChangeToStarboardCamera()
    {
        //something like GameManager.ChangeCameraAngle(CameraManager.StarboardCameraIndex)
    }
    public void ChangeToPortCamera() 
    {
        //something like GameManager.ChangeCameraAngle(CameraManager.PortCameraIndex)
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
        gameManager.SkipIntro();
    }

    public void Continue()
    {
        gameManager.DisplayMessage();
    }
        

}
