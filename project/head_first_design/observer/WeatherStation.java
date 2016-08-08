//test
public class WeatherStation{
    public static void main(String[] args) {
        WeatherDate WeatherDate = new WeatherDate();
        CurrentConditionsDisplay currentDisplay = new CurrentConditionsDisplay(WeatherDate);

        WeatherDate.setMeasurements(80,65,30.4f);
    }
}
