
import java.awt.FlowLayout;
import javax.swing.*;


public class example {
    public static void main(String[] args) {
        JFrame f = new JFrame("Example");
        f.setVisible(true);
        f.setSize(800, 400);
        f.setLayout(new FlowLayout());
        JLabel l1 = new JLabel("User name: ");
        f.add(l1);
        JTextField t1 = new JTextField(20);
        f.add(t1);
        JLabel l2 = new JLabel("Password: ");
        f.add(l2);
        JTextField t2 = new JTextField(20);
        f.add(t2);
        JButton b = new JButton("Button", null);
        f.add(b);
    }
}