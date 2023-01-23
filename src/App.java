
public class App {
    public static void main(String[] args) throws Exception {
        String msg = "Ab36Uz@9";
        encoder en = new encoder();
        String s = en.encode(msg);
        String o = en.decode(s);
        System.out.println(s);
        System.out.println(o);
    }
}
