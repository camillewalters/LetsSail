using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CubeController : MonoBehaviour
{

    public float rotationSpeed = 90f; // Speed of rotation in degrees per second
    public bool isRotating = false;

    void Update()
    {
        if (isRotating)
        {
            transform.Rotate(0f, rotationSpeed * Time.deltaTime, 0f);
        }
    }

    public void SetRotation(int shouldRotate)
    {
        if (shouldRotate == 0)
        {
            isRotating = false;
        }
        else if (shouldRotate == 1)
        {
            isRotating = true;
        }
    }
}
