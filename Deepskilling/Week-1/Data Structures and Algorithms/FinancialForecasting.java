public class FinancialForecasting {
    public static double futureval(double currval, double growthrate, int yrs) {
        if(yrs == 0) {
            return currval;
        }
            return futureval(currval * (1 + growthrate), growthrate, yrs - 1);
    }
    public static void main(String[] args) {
        double currval = 20000;
        double growthrate = 0.02;
        int yrs = 7;
        double futureval = futureval(currval, growthrate, yrs);
        System.out.println("Current Value: " + currval);
        System.out.println("Growth Rate: " + growthrate);
        System.out.println("Years: " + yrs);
        System.out.println("Future Value: " + futureval);
        System.out.println("TIME COMPLEXITY: O(n), where n is the number of years");
        System.out.println("Optimization: Use iteration instead of recursion");
    }
}
