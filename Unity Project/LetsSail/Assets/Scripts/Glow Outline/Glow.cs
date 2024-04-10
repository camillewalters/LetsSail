using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Glow : MonoBehaviour
{
    public Material glowMaterial;
    Material _startMaterial;

    private void OnMouseEnter()
    {
        _startMaterial = gameObject.GetComponent<Renderer>().material;
        gameObject.GetComponent<Renderer>().material = glowMaterial;
    }

    private void OnMouseExit()
    {
        gameObject.GetComponent<Renderer>().material = _startMaterial;
    }
}
