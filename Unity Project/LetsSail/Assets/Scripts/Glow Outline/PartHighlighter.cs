using System;
using System.Collections;
using System.Collections.Generic;
using NUnit.Framework.Constraints;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

public class PartHighlighter : MonoBehaviour
{
    [Range(0, 5)]
    public int active = 0;
    public string part = "Hull";

    public Camera mainCamera;
    public bool topView = false;
    
    private List<GameObject> objects;
    private int previousActive = 0;
    
    private void Start()
    {
        objects = new List<GameObject>
        {
            GameObject.Find("Hull"),
            GameObject.Find("Bow"),
            GameObject.Find("Stern"),
            GameObject.Find("Port"),
            GameObject.Find("Starboard"),
            GameObject.Find("Cockpit")
        };

        for (var i = 1; i < objects.Count; ++i)
        {
            objects[i].SetActive(false);
        }
    }

    void Update()
    {
        if (active != previousActive)
        {
            objects[previousActive].SetActive(false);
            objects[active].SetActive(true);
            part = objects[active].name;
            previousActive = active;
        }

        if (topView)
        {
            mainCamera.transform.position = new Vector3(0, 21.87f, -4.45f);
            mainCamera.transform.rotation = Quaternion.Euler(77.275f, 0, 0);
        }
        else
        {
            mainCamera.transform.position = new Vector3(-24.15f, 13.12f, 0);
            mainCamera.transform.rotation = Quaternion.Euler(6.032f, 90, 0);
        }
    }
    
}
