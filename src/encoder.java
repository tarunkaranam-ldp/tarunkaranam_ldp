public class encoder {
    int start = 2;
    int limit = 5;

    public String encode(String msg) {
        String enc = "";
        int counter = start;
        for (char c : msg.toCharArray()) {

            enc += (char) (c + counter);
            if (counter >= limit) {
                counter = 2;
            } else {
                counter++;
            }
        }
        return enc;

    }

    public String decode(String msg) {
        int counter = start;
        String dec = "";
        for (char c : msg.toCharArray()) {
            dec += (char) (c - counter);
            if (counter >= limit) {
                counter = 2;
            } else {
                counter++;
            }
        }
        return dec;

    }
}
