using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Highlight : MonoBehaviour
{
    private Color _startColor;

    private void OnMouseEnter()
    {
        _startColor = gameObject.GetComponent<Renderer>().material.color;
        gameObject.GetComponent<Renderer>().material.color = Color.yellow;
    }

    private void OnMouseExit()
    {
        gameObject.GetComponent<Renderer>().material.color = _startColor;
    }
}
