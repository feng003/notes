
public class CurrentCondtionsDisplay implements Observer DisplayElement{
    private float temp;
    private float humidity;
    private float weatherData;

    public CurrentCondtionsDisplay(Subject weatherData){
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    public void update(float temp,float humidity,float pressure){
        this.temp = temp;
        this.humidity = humidity;
        display();
    }

    public display(){
        System.out.println("Current conditions" + temp + "F dsgrees and" + humidity);
    }
}
