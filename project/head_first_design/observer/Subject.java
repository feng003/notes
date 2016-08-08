public interface Subject{
    public void registerObserver( Observer o);
    public void removeOberver(Observer o);;
    public void notifyObserver(Observer o);
}
