using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEditor.Build.Content;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    //Text box
    TMP_Text textBox;
    Image textBackground;

    
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


    public void ChangeTextBoxType()
    {
        //image.color = new color
        //image.sprite = new sprite
    }
    public void CloseTextBox()
    {
        ClearTextBox();
        textBackground.sprite = null;
    }

    public void SkipIntro()
    {

    }
        

}
