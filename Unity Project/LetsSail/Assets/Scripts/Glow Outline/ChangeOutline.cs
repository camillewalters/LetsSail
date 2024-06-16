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
        _outline.OutlineWidth = 10;
        _color = Color.black; // Color.grey;
        _outline.OutlineColor = _color;
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

    // TODO: Delete if we dont do that view change nonsense
    public void ToggleOutlineForCameraView(bool toggle)
    {
        Debug.Log($"turning {toggle} for {gameObject.name}");
        _outline.enabled = toggle;
    }
}
