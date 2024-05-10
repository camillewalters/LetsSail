using UnityEngine;
using Cinemachine;

public class CameraManager : MonoBehaviour
{
    public const int PortCameraIndex = 0;
    public const int StarboardCameraIndex = 1;
    public const int BirdseyeCameraIndex = 2;
    public const int IntroShotCameraIndex = 3;
    public const int SkipperCameraIndex = 4;

    public CinemachineVirtualCamera[] cameras;

    public CinemachineVirtualCamera startCamera;
    public CinemachineVirtualCamera currentCamera;


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

    void Update()
    {
        //ChangeCameraBasedOnKeyInput();
    }

    void ChangeCameraBasedOnKeyInput()
    {
        if (Input.GetKeyDown(KeyCode.P))
        {
            SwitchCamera(cameras[PortCameraIndex]);
        }
        if (Input.GetKeyDown(KeyCode.S))
        {
            SwitchCamera(cameras[StarboardCameraIndex]);
        }
        if (Input.GetKeyDown(KeyCode.B))
        {
            SwitchCamera(cameras[BirdseyeCameraIndex]);
        }
        if (Input.GetKeyDown(KeyCode.I))
        {
            SwitchCamera(cameras[IntroShotCameraIndex]);
        }
        if (Input.GetKeyDown(KeyCode.K))
        {
            SwitchCamera(cameras[SkipperCameraIndex]);
        }
    }

    public void ChangeCameraPosition(int index)
    {
        if (index < cameras.Length)
        {
            SwitchCamera(cameras[index]);
        }        
    }

    void SwitchCamera(CinemachineVirtualCamera newCam)
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
