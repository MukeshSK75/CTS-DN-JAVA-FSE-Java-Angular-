public class SingletonPatternExample {
    static class Logger{
        private static Logger instance;

        private Logger() {
            System.out.println("Logger instance created");     
        }
        public static Logger getInstance() {
            if (instance == null){
                instance = new Logger();
            }
            return instance;
        }
        public void log(String m){
            System.out.println(m);
        }
    }
    public static void main(String[] args){
        Logger l1 = Logger.getInstance();
        Logger l2 = Logger.getInstance();
        l1.log("HII!!");
        l2.log("HELOOO!!");
        if(l1 == l2){
            System.out.println("Only one instance exists (singleton)");
        }
        else{
            System.out.println("Multiple instances exist (not singleton)");
        }
    }
}
