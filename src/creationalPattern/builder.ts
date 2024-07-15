

export class DatabaseConnectionBuilder {
    private host: string;
    private port : number;
    private username:string;
    private password:string;
    private database:string;


    setHost(host:string) {
        this.host = host;
        return this;
    }

    setPort(port : number) {
        this.port = port;
        return this;
    }
    setUsername(username:string) {
        this.username = username;
        return this;
    }
    setPassword(password:string) {
        this.password = password;
        return this;
    }
    setDatabase(database:string) {
        this.database = database;
        return this;
    }
    build() {
        return new DatabaseConnection(
            this.host,
            this.port,
            this.username,
            this.password,
            this.database
        );
    }
}

export class DatabaseConnection {
    constructor(
      private readonly host: string,
      private readonly port: number,
      private readonly username: string,
      private readonly password: string,
      private readonly database: string,
    ) {
      // connect to database
    }
  
    // other methods
  }