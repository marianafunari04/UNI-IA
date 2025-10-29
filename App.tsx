
import React, { useState, useEffect } from 'react';
import { AppScreen, User } from './types';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import EducationalScreen from './components/EducationalScreen';
import MainScreen from './components/MainScreen';
import SettingsScreen from './components/SettingsScreen';
import GlobalLibrasButton from './components/GlobalLibrasButton';
import { SettingsIcon, TranslateIcon, LogoutIcon } from './components/Icons';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.SPLASH);
  const [isFirstLogin, setIsFirstLogin] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen(AppScreen.LOGIN);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    // In a real app, this would be determined from user data
    setIsFirstLogin(true); 
    setCurrentScreen(AppScreen.EDUCATIONAL);
  };
  
  const handleSignUpSuccess = () => {
    setCurrentScreen(AppScreen.LOGIN);
  };

  const handleEducationalScreenContinue = () => {
    setIsFirstLogin(false);
    setCurrentScreen(AppScreen.MAIN);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentScreen(AppScreen.LOGIN);
  };
  
  const renderScreen = () => {
    if (currentUser) {
       if (isFirstLogin) {
        return <EducationalScreen onContinue={handleEducationalScreenContinue} />;
      }
      switch (currentScreen) {
        case AppScreen.MAIN:
          return <MainScreen />;
        case AppScreen.SETTINGS:
          return <SettingsScreen user={currentUser} onUpdateUser={setCurrentUser} />;
        default:
          return <MainScreen />;
      }
    }

    switch (currentScreen) {
      case AppScreen.SPLASH:
        return <SplashScreen />;
      case AppScreen.LOGIN:
        return <LoginScreen onLoginSuccess={handleLoginSuccess} onNavigateToSignUp={() => setCurrentScreen(AppScreen.SIGNUP)} />;
      case AppScreen.SIGNUP:
        return <SignUpScreen onSignUpSuccess={handleSignUpSuccess} onNavigateToLogin={() => setCurrentScreen(AppScreen.LOGIN)} />;
       default:
        return <LoginScreen onLoginSuccess={handleLoginSuccess} onNavigateToSignUp={() => setCurrentScreen(AppScreen.SIGNUP)} />;
    }
  };

  const NavItem: React.FC<{ screen: AppScreen; label: string; icon: React.ReactNode }> = ({ screen, label, icon }) => (
    <button
      onClick={() => setCurrentScreen(screen)}
      className={`flex flex-col items-center justify-center space-y-1 w-full p-2 rounded-lg transition-colors duration-200 ${
        currentScreen === screen ? 'bg-indigo-500 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-md h-[90vh] max-h-[800px] bg-gray-800 shadow-2xl rounded-2xl flex flex-col overflow-hidden relative border border-gray-700">
        <main className="flex-grow overflow-y-auto">
          {renderScreen()}
        </main>
        {currentUser && !isFirstLogin && (
          <>
            <nav className="w-full bg-gray-900 border-t border-gray-700 p-2 flex justify-around items-center">
              <NavItem screen={AppScreen.MAIN} label="Tradutor" icon={<TranslateIcon />} />
              <NavItem screen={AppScreen.SETTINGS} label="Perfil" icon={<SettingsIcon />} />
              <button
                onClick={handleLogout}
                className="flex flex-col items-center justify-center space-y-1 w-full p-2 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-red-800 hover:text-white"
              >
                <LogoutIcon />
                <span className="text-xs font-medium">Sair</span>
              </button>
            </nav>
            <GlobalLibrasButton />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
