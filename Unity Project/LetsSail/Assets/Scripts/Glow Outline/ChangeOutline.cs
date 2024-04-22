using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChangeOutline : MonoBehaviour
{
    private Outline _outline;
    private Color _color;

    private void Start()
    {
        _outline = gameObject.GetComponent<Outline>();
        _color = _outline.OutlineColor;
    }

    private void OnMouseEnter()
    {
        _outline.OutlineColor = Color.red;
    }

    private void OnMouseExit()
    {
        _outline.OutlineColor = _color;
        // Destroy(outline);
    }
}
