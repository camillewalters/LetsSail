using UnityEngine;
using Cinemachine;

public class CameraManager : MonoBehaviour
{
    public enum CameraIndex
    {
        Port = 0,
        Starboard = 1,
        Birdseye = 2,
        IntroShot = 3,
        Skipper = 4
    }

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
            SwitchCamera(cameras[(int) CameraIndex.Port]);
        }
        if (Input.GetKeyDown(KeyCode.S))
        {
            SwitchCamera(cameras[(int) CameraIndex.Starboard]);
        }
        if (Input.GetKeyDown(KeyCode.B))
        {
            SwitchCamera(cameras[(int) CameraIndex.Birdseye]);
        }
        if (Input.GetKeyDown(KeyCode.I))
        {
            SwitchCamera(cameras[(int) CameraIndex.IntroShot]);
        }
        if (Input.GetKeyDown(KeyCode.K))
        {
            SwitchCamera(cameras[(int) CameraIndex.Skipper]);
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
