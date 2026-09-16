import React, { useState, useEffect, useCallback } from 'react';
import {
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudRain,
  CloudDrizzle,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Compass,
  RefreshCw,
  Sparkles,
  Shirt,
  Waves,
  CalendarDays,
  AlertCircle
} from 'lucide-react';

interface WeatherForecastDay {
  date: string;
  dayName: string;
  maxTemp: number;
  minTemp: number;
  weatherCode: number;
  precipitationProb: number;
}

interface CurrentWeatherData {
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  weatherCode: number;
  isDay: boolean;
  time: string;
}

interface LakeBunyonyiWeatherState {
  current: CurrentWeatherData;
  daily: WeatherForecastDay[];
  elevation: number;
  lastUpdated: string;
}

// Fallback baseline representative of Lake Bunyonyi's temperate tropical highland climate
const FALLBACK_WEATHER: LakeBunyonyiWeatherState = {
  current: {
    temperature: 22.4,
    feelsLike: 22.1,
    humidity: 68,
    windSpeed: 8.5,
    precipitation: 0.0,
    weatherCode: 2,
    isDay: true,
    time: new Date().toISOString()
  },
  daily: [
    {
      date: new Date().toISOString().split('T')[0],
      dayName: 'Today',
      maxTemp: 24.2,
      minTemp: 13.8,
      weatherCode: 2,
      precipitationProb: 20
    },
    {
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      dayName: 'Tomorrow',
      maxTemp: 23.8,
      minTemp: 13.2,
      weatherCode: 3,
      precipitationProb: 35
    },
    {
      date: new Date(Date.now() + 172800000).toISOString().split('T')[0],
      dayName: new Date(Date.now() + 172800000).toLocaleDateString('en-US', { weekday: 'short' }),
      maxTemp: 24.6,
      minTemp: 14.1,
      weatherCode: 1,
      precipitationProb: 15
    },
    {
      date: new Date(Date.now() + 259200000).toISOString().split('T')[0],
      dayName: new Date(Date.now() + 259200000).toLocaleDateString('en-US', { weekday: 'short' }),
      maxTemp: 23.1,
      minTemp: 13.5,
      weatherCode: 61,
      precipitationProb: 55
    },
    {
      date: new Date(Date.now() + 345600000).toISOString().split('T')[0],
      dayName: new Date(Date.now() + 345600000).toLocaleDateString('en-US', { weekday: 'short' }),
      maxTemp: 24.0,
      minTemp: 13.9,
      weatherCode: 2,
      precipitationProb: 25
    }
  ],
  elevation: 1962,
  lastUpdated: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
};

function getWeatherDetails(code: number, isDay: boolean = true) {
  switch (code) {
    case 0:
      return {
        label: isDay ? 'Clear Highland Skies' : 'Clear Starry Night',
        icon: isDay ? Sun : Sparkles,
        iconColor: 'text-amber-400',
        bgGradient: 'from-amber-500/10 to-transparent'
      };
    case 1:
      return {
        label: isDay ? 'Mainly Sunny' : 'Mostly Clear',
        icon: isDay ? CloudSun : Cloud,
        iconColor: 'text-amber-300',
        bgGradient: 'from-amber-500/10 to-transparent'
      };
    case 2:
      return {
        label: 'Partly Cloudy',
        icon: CloudSun,
        iconColor: 'text-sky-400',
        bgGradient: 'from-sky-500/10 to-transparent'
      };
    case 3:
      return {
        label: 'Overcast Highland Clouds',
        icon: Cloud,
        iconColor: 'text-stone-300',
        bgGradient: 'from-stone-500/10 to-transparent'
      };
    case 45:
    case 48:
      return {
        label: 'Highland Lake Mist / Fog',
        icon: CloudFog,
        iconColor: 'text-teal-300',
        bgGradient: 'from-teal-500/10 to-transparent'
      };
    case 51:
    case 53:
    case 55:
      return {
        label: 'Gentle Island Drizzle',
        icon: CloudDrizzle,
        iconColor: 'text-cyan-400',
        bgGradient: 'from-cyan-500/10 to-transparent'
      };
    case 61:
    case 63:
    case 65:
      return {
        label: 'Highland Rain Showers',
        icon: CloudRain,
        iconColor: 'text-blue-400',
        bgGradient: 'from-blue-500/10 to-transparent'
      };
    case 80:
    case 81:
    case 82:
      return {
        label: 'Passing Lake Showers',
        icon: CloudRain,
        iconColor: 'text-blue-400',
        bgGradient: 'from-blue-500/10 to-transparent'
      };
    case 95:
    case 96:
    case 99:
      return {
        label: 'Highland Thunderstorm',
        icon: CloudLightning,
        iconColor: 'text-amber-400',
        bgGradient: 'from-amber-600/10 to-transparent'
      };
    default:
      return {
        label: 'Pleasant Highland Climate',
        icon: CloudSun,
        iconColor: 'text-amber-400',
        bgGradient: 'from-amber-500/10 to-transparent'
      };
  }
}

function getWaterCondition(windSpeedKmH: number) {
  if (windSpeedKmH < 10) {
    return {
      status: 'Glass-Smooth Waters',
      description: 'Prime conditions for dugout canoeing & tranquil boat cruises',
      color: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/30'
    };
  } else if (windSpeedKmH < 22) {
    return {
      status: 'Gentle Lake Ripple',
      description: 'Comfortable crossing with brisk fresh highland breeze',
      color: 'text-sky-400',
      badgeBg: 'bg-sky-500/10 border-sky-500/30'
    };
  } else {
    return {
      status: 'Lively Lake Swell',
      description: 'Sturdy motorboat crossing recommended; life vests provided',
      color: 'text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-500/30'
    };
  }
}

export const LakeBunyonyiWeather: React.FC = () => {
  const [weather, setWeather] = useState<LakeBunyonyiWeatherState>(FALLBACK_WEATHER);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<'C' | 'F'>('C');
  const [activeTab, setActiveTab] = useState<'overview' | 'advice'>('overview');

  const fetchWeather = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Habuharo Island, Lake Bunyonyi: -1.306943, 29.9020655
      const url =
        'https://api.open-meteo.com/v1/forecast?latitude=-1.3069&longitude=29.9021&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Africa%2FKampala';

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Weather service returned ${res.status}`);
      }
      const data = await res.json();

      const currentData: CurrentWeatherData = {
        temperature: Math.round(data.current.temperature_2m * 10) / 10,
        feelsLike: Math.round(data.current.apparent_temperature * 10) / 10,
        humidity: Math.round(data.current.relative_humidity_2m),
        windSpeed: Math.round(data.current.wind_speed_10m * 10) / 10,
        precipitation: data.current.precipitation ?? 0,
        weatherCode: data.current.weather_code,
        isDay: Boolean(data.current.is_day),
        time: data.current.time
      };

      const dailyData: WeatherForecastDay[] = (data.daily.time as string[])
        .slice(0, 5)
        .map((dateStr, idx) => {
          const dateObj = new Date(dateStr);
          let dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
          if (idx === 0) dayName = 'Today';
          if (idx === 1) dayName = 'Tomorrow';

          return {
            date: dateStr,
            dayName,
            maxTemp: Math.round(data.daily.temperature_2m_max[idx]),
            minTemp: Math.round(data.daily.temperature_2m_min[idx]),
            weatherCode: data.daily.weather_code[idx],
            precipitationProb: data.daily.precipitation_probability_max?.[idx] ?? 10
          };
        });

      setWeather({
        current: currentData,
        daily: dailyData,
        elevation: Math.round(data.elevation ?? 1962),
        lastUpdated: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      });
    } catch (err: unknown) {
      console.warn('Using baseline Lake Bunyonyi weather due to network limit:', err);
      setError('Live satellite link temporarily slow; displaying typical highland conditions.');
      // Keep baseline
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeather();
    // Auto-refresh weather every 20 minutes
    const interval = setInterval(fetchWeather, 20 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchWeather]);

  const convertTemp = (tempC: number) => {
    if (unit === 'F') {
      return Math.round((tempC * 9) / 5 + 32);
    }
    return Math.round(tempC);
  };

  const currentCondition = getWeatherDetails(weather.current.weatherCode, weather.current.isDay);
  const CurrentIcon = currentCondition.icon;
  const lakeCondition = getWaterCondition(weather.current.windSpeed);

  return (
    <div
      id="lake-bunyonyi-weather"
      className="mt-8 bg-stone-950 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden transition-all duration-300"
    >
      {/* Top Bar: Title, Live Indicator & Unit Switcher */}
      <div className="px-6 py-4 bg-stone-900/80 border-b border-stone-800/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Live Island Forecast
            </span>
          </div>
          <span className="text-stone-600 hidden sm:inline">•</span>
          <span className="text-xs text-stone-400 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Habuharo Island ({weather.elevation}m ASL)</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Refresh Button */}
          <button
            onClick={fetchWeather}
            disabled={loading}
            id="refresh-weather-btn"
            title="Refresh current forecast"
            aria-label="Refresh weather forecast"
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-amber-400' : ''}`} />
          </button>

          {/* Unit Toggle */}
          <div className="flex rounded-lg bg-stone-800 p-0.5 border border-stone-700/60">
            <button
              onClick={() => setUnit('C')}
              id="weather-unit-c-btn"
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                unit === 'C'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              °C
            </button>
            <button
              onClick={() => setUnit('F')}
              id="weather-unit-f-btn"
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                unit === 'F'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              °F
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className="px-6 py-2 bg-amber-950/40 border-b border-amber-900/40 flex items-center gap-2 text-xs text-amber-300">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-400" />
          <span>{error}</span>
        </div>
      )}

      {/* Main Weather Card Body */}
      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Current Conditions Large Display */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
                    {convertTemp(weather.current.temperature)}°{unit}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs text-stone-400 font-medium">
                      Feels like {convertTemp(weather.current.feelsLike)}°{unit}
                    </span>
                    <span className="text-[10px] text-stone-500">
                      Updated {weather.lastUpdated}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 mt-2">
                  <CurrentIcon className={`w-6 h-6 ${currentCondition.iconColor}`} />
                  <span className="font-medium text-base sm:text-lg text-stone-200">
                    {currentCondition.label}
                  </span>
                </div>
              </div>

              {/* Water Condition Badge */}
              <div className="hidden sm:block text-right">
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold ${lakeCondition.badgeBg} ${lakeCondition.color}`}
                >
                  <Waves className="w-4 h-4" />
                  <span>{lakeCondition.status}</span>
                </div>
                <p className="text-[11px] text-stone-400 mt-1 max-w-[190px] leading-tight text-right">
                  {lakeCondition.description}
                </p>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-stone-900/90 p-3 rounded-xl border border-stone-800/80">
                <div className="flex items-center gap-1.5 text-stone-400 text-xs mb-1">
                  <Wind className="w-3.5 h-3.5 text-teal-400" />
                  <span>Lake Wind</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white">
                  {weather.current.windSpeed} <span className="text-xs font-normal text-stone-400">km/h</span>
                </p>
                <p className="text-[10px] text-stone-400 truncate">
                  {weather.current.windSpeed < 12 ? 'Gentle breeze' : 'Moderate'}
                </p>
              </div>

              <div className="bg-stone-900/90 p-3 rounded-xl border border-stone-800/80">
                <div className="flex items-center gap-1.5 text-stone-400 text-xs mb-1">
                  <Droplets className="w-3.5 h-3.5 text-sky-400" />
                  <span>Humidity</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white">
                  {weather.current.humidity}%
                </p>
                <p className="text-[10px] text-stone-400">
                  Fresh highland air
                </p>
              </div>

              <div className="bg-stone-900/90 p-3 rounded-xl border border-stone-800/80">
                <div className="flex items-center gap-1.5 text-stone-400 text-xs mb-1">
                  <CloudRain className="w-3.5 h-3.5 text-blue-400" />
                  <span>Precipitation</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white">
                  {weather.current.precipitation} <span className="text-xs font-normal text-stone-400">mm</span>
                </p>
                <p className="text-[10px] text-stone-400">
                  {weather.current.precipitation > 0 ? 'Light rain' : 'Dry conditions'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 5-Day Outlook */}
          <div className="lg:col-span-6 bg-stone-900/60 p-4 sm:p-5 rounded-xl border border-stone-800/90">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-300">
                <CalendarDays className="w-4 h-4 text-amber-400" />
                <span>5-Day Island Outlook</span>
              </div>
              <span className="text-[11px] text-stone-400">
                High / Low
              </span>
            </div>

            <div className="space-y-2.5">
              {weather.daily.map((day, idx) => {
                const dayCond = getWeatherDetails(day.weatherCode, true);
                const DayIcon = dayCond.icon;
                return (
                  <div
                    key={day.date}
                    className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg hover:bg-stone-800/50 transition-colors"
                  >
                    <span className="w-20 font-medium text-stone-200">
                      {day.dayName}
                    </span>

                    <div className="flex items-center gap-2 flex-1 px-2">
                      <DayIcon className={`w-4 h-4 shrink-0 ${dayCond.iconColor}`} />
                      <span className="text-stone-400 text-[11px] hidden sm:inline truncate max-w-[140px]">
                        {dayCond.label}
                      </span>
                    </div>

                    {day.precipitationProb > 20 && (
                      <span className="text-[10px] text-sky-400 bg-sky-950/60 px-1.5 py-0.5 rounded mr-2 border border-sky-800/40">
                        {day.precipitationProb}% rain
                      </span>
                    )}

                    <div className="flex items-center gap-2 font-mono text-right">
                      <span className="text-white font-bold">
                        {convertTemp(day.maxTemp)}°
                      </span>
                      <span className="text-stone-500">
                        {convertTemp(day.minTemp)}°
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Packing & Seasonal Microclimate Guidance Accordion/Card */}
        <div className="mt-6 pt-5 border-t border-stone-800/80">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Shirt className="w-4 h-4" />
              <span>Lake Bunyonyi Travel & Packing Advisory</span>
            </h4>
            <span className="text-[11px] text-stone-400">
              Kigezi Highlands Microclimate (1,962m elevation)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-stone-900/40 border border-stone-800/60">
              <div className="font-semibold text-stone-200 flex items-center gap-1.5 mb-1">
                <CloudFog className="w-4 h-4 text-teal-400" />
                <span>Morning Mist (6:30 - 9:00 AM)</span>
              </div>
              <p className="text-stone-400 leading-relaxed text-[11px]">
                Cool temperatures (12°C - 15°C) with ethereal mist gliding over 29 islands. Pack a warm fleece or sweater for early morning coffee on your private wooden verandah.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-900/40 border border-stone-800/60">
              <div className="font-semibold text-stone-200 flex items-center gap-1.5 mb-1">
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Midday Sun (11:00 AM - 4:00 PM)</span>
              </div>
              <p className="text-stone-400 leading-relaxed text-[11px]">
                Pleasantly warm (23°C - 26°C) and sunny. Ideal for safe, bilharzia-free lake swimming, island motorboat tours, and dugout canoeing. Bring sunglasses, swimwear, and sunscreen.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-900/40 border border-stone-800/60">
              <div className="font-semibold text-stone-200 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Lakeside Evenings (7:00 PM onwards)</span>
              </div>
              <p className="text-stone-400 leading-relaxed text-[11px]">
                Crisp mountain air settles over the lake. Perfect for cozy evenings by the dining room open hearth fire with hot Ugandan cocoa and fresh garlic crayfish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
