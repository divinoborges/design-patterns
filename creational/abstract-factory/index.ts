interface LoginButton {
    setLabel(): void;
}

class IosLoginButton implements LoginButton {
    setLabel(): void {
        console.log('Sign in with Apple');
    }
}

class AndroidLoginButton implements LoginButton {
    setLabel(): void {
        console.log('Sign in with Google');
    }
}

interface LoginButtonFactory {
    createButton(): LoginButton;
}

class IosFactory implements LoginButtonFactory {
    createButton(): LoginButton {
        return new IosLoginButton();
    }
}

class AndroidFactory implements LoginButtonFactory {
    createButton(): LoginButton {
        return new AndroidLoginButton();
    }
}

class Application {
    private loginButton: LoginButton;

    constructor(private loginButtonFactory: LoginButtonFactory) {
        this.loginButton = loginButtonFactory.createButton();
        this.loginButton.setLabel();
    }
}

class ApplicationConfigurator {
    private loginButtonFactory: LoginButtonFactory | undefined;

    constructor(private platform: string) {
        this.main(platform);
    }

    main(platform: string): void {
        if (platform === 'ios') {
            this.loginButtonFactory = new IosFactory();
        } else if (platform === 'android') {
            this.loginButtonFactory = new AndroidFactory();
        } else {
            this.loginButtonFactory = new AndroidFactory();
            console.log('UNKNOWN');
        }

        const application: Application = new Application(this.loginButtonFactory);
    }
}

const application = new ApplicationConfigurator('android');
