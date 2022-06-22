import mkdirp from 'mkdirp';
import moment from 'moment';
import path from 'path';
import winston from 'winston';

enum Log_Level_E {
    Error = 'error',
    Warning = 'warning',
    Info = 'Info',
    Debug = 'debug',
    Verbose = 'verbose'
};

class Log {

    public static readonly LogLevel: string = Log_Level_E.Debug;
    public static readonly MaxLogFileSize: number = 1024 * 1024 * 10;
    public static readonly MaxLogFiles: number = 100;
    public static readonly LogFileName: string = "React-App.log"
    public static readonly MaxLogFileNameLength: number = 25;
    public static readonly LogPath: string = "./log";
    public static readonly ProjectRootPath: string = path.join(__dirname, '..');
    public static readonly UseRelativePath: boolean = false;
    private readonly writer: winston.Logger;

    constructor() {
        this.createLogDir();
        this.writer = this.getLogger();
    }

    private createLogDir() {
        try {
            mkdirp.sync(Log.LogPath);
        } catch(e) {
            console.log(`Create log path FAILED; ${e}`);
            return;
        }
        console.info(`Create log Directory SUCCESS`);
    }

    private getTimeStampFormat(): string {
        return moment().format("YYYY-MM-DD HH:mm:ss.SSS ZZ").trim();
    }

    private getLogger() {
        if(this.writer !== undefined) {
            return this.writer;
        }
    }
    
    private getStackInfo(stackIndex: number) {
        let stackList = (new Error(undefined).stack?.split("\n").slice(3));
        let stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/gi;
        let stackReg2 = /at\s+()(.*):(\d*):(\d*)/gi;
        let s = stackList?.[stackIndex] || stackList?.[0];

        if(s === undefined) {
            throw new Error();
        }

        s = s.toString();
        let sp = stackReg.exec(s) || stackReg2.exec(s);

        if(sp && sp.length === 5) {
            return {
                method: sp[1],
                relativePath: path.relative(Log.ProjectRootPath, sp[2]),
                line: sp[3],
                pos: sp[4],
                file: path.basename(sp[2]),
                stack: stackList?.join("\n")
            };
        }
    }

}

export default Log;