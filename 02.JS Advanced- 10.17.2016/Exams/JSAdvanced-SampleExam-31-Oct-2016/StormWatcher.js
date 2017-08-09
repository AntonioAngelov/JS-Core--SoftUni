/**
 * Created by anton on 03-Nov-16.
 */
(function solve(){
    let currentId = 0;
    class Reading{
        constructor(newTemperature, newHumidity, newPressure, newWindSpeed){
            this.id = currentId;
            ++currentId;
            this.temperature = newTemperature;
            this.humidity = newHumidity;
            this.pressure = newPressure;
            this.windSpeed = newWindSpeed;
        }

        toString(){
            let summary = `Reading ID: ${this.id}` + '\n';
            summary += `Temperature: ${this.temperature}*C` + '\n';
            summary += `Relative Humidity: ${this.humidity}%` + '\n';
            summary += `Pressure: ${this.pressure}hpa` + '\n';
            summary += `Wind Speed: ${this.windSpeed}m/s` + '\n';
            if(this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25){
                summary += 'Weather: Stormy';
            }
            else summary += 'Weather: Not stormy';

            return summary;
        }
    }

    return  Reading;
}())