imporet java.util.*
//WeatherData shixian le Subject interface
public class WeatherData implements Subject{
    private ArrayList observer;
    private float temp;
    private float humidity;
    private float pressure;

    public WeatherData(){
        observers = new ArrayList();
    }

    public void registerObserver(observer o){
        observers.add(o);
    }

    public void removeOberver(observer o){
        int i = observers.indexOf(o);
        if(i>0){
            observers.remove(i);
        }
    }

    public void notifyObservers(observer o){
        for(int i=0;i<observers.size();i++){
            Observer.observer = (Observer)Observer.get(i);
            observer.update(temp,humidity,pressure);
        }
    }

    public void measurementsChange(){
        notifyObservers();
    }

    public void setMeasurements(float temp,float humidity,float pressure){
        this.temp = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        measurementsChange();
    }
}
