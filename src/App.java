
public class App {
    public static void main(String[] args) throws Exception {
        String msg = "Ab36Uz@9";
        encoder en = new encoder();
        String EncodingMessage = en.encode(msg);
        String DecodingMessage = en.decode(s);
        System.out.println(EncodingMessage);
        System.out.println(DecodingMessage);
    }
}
