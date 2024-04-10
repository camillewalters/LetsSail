using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Cinemachine;

public class CameraManager : MonoBehaviour
{
    public CinemachineVirtualCamera[] cameras;

    public CinemachineVirtualCamera startCamera;
    public CinemachineVirtualCamera currentCamera;

    // Start is called before the first frame update
    void Start()
    {
        currentCamera = startCamera;

        foreach (var cam in cameras)
        {
            if(cam == currentCamera)
            {
                cam.Priority = 20;
            }
            else
            {
                cam.Priority = 10;
            }
        }
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.K))
        {
            SwitchCamera(cameras[0]);
        }
        if (Input.GetKeyDown(KeyCode.S))
        {
            SwitchCamera(cameras[1]);
        }
        if (Input.GetKeyDown(KeyCode.D))
        {
            SwitchCamera(cameras[2]);
        }
    }

    public void SwitchCamera(CinemachineVirtualCamera newCam)
    {
        currentCamera = newCam;
        currentCamera.Priority = 20;

        foreach (var cam in cameras)
        {
            if(cam != currentCamera)
            {
                cam.Priority = 10;
            }
        }
    }
}
