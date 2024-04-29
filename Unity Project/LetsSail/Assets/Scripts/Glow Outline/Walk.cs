using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Walk : MonoBehaviour
{
    private Animator _rioAnimator;
    
    void Start()
    {
        _rioAnimator = gameObject.GetComponent<Animator>();
    }
    
    void Update()
    {
        if (Input.GetKey(KeyCode.W))
        {
            _rioAnimator.Play("Walk");
        }
        else if (Input.GetKey(KeyCode.A))
        {
            //gameObject.transform.Rotate(0, -90, 0);
            _rioAnimator.Play("Left");
        }
        else if (Input.GetKey(KeyCode.D))
        {
            //gameObject.transform.Rotate(0, 90, 0);
            _rioAnimator.Play("Right");
        }
    }
}
