using UnityEngine;

public class WaterBobbing : MonoBehaviour
{
    public float bobSpeed = 1f; // Speed of the bobbing motion
    public float bobHeight = 0.5f; // Maximum height of the bobbing motion
    public float rollAngle = 10f; // Maximum roll angle
    private float originalY; // Original Y position of the object
    public bool useRoll = true;

    void Start()
    {
        originalY = transform.position.y;
    }

    void Update()
    {
        // Calculate the new Y position based on a sine wave
        float newY = originalY + Mathf.Sin(Time.time * bobSpeed) * bobHeight;

        // Apply the new position
        transform.position = new Vector3(transform.position.x, newY, transform.position.z);

        if (useRoll)
        {
            // Calculate the roll angle based on the sine wave
            float roll = Mathf.Sin(Time.time * bobSpeed) * rollAngle;

            // Apply the roll rotation
            transform.rotation = Quaternion.Euler(0f, 0f, roll);
        }
        
    }
}
