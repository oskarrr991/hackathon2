package ut.com.hackathon.plugin.hackathonPlugin;

import org.junit.Test;
import com.hackathon.plugin.hackathonPlugin.api.MyPluginComponent;
import com.hackathon.plugin.hackathonPlugin.impl.MyPluginComponentImpl;

import static org.junit.Assert.assertEquals;

public class MyComponentUnitTest
{
    @Test
    public void testMyName()
    {
        MyPluginComponent component = new MyPluginComponentImpl(null);
        assertEquals("names do not match!", "myComponent",component.getName());
    }
}