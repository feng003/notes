public class SimpleDotComTestDrive
{
    public static void main(String[] args) {
        SimpleDotCom dot = new SimpleDotCom();

        int[] location = {2,3,4};
        dot.setLocationCells(location);

        String userGuess = "1";
        String result = dot.checkYourSelf(userGuess);
        String testResult = "failed";

        if(result.equals("hit"))
        {
            testResult = "passed";
        }
        System.out.print(testResult);
    }
}
