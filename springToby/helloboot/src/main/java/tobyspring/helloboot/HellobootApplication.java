package tobyspring.helloboot;

import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.WebServer;
import org.springframework.web.context.support.GenericWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class HellobootApplication {

    public static void main(String[] args) {
        GenericWebApplicationContext applicationContext = new GenericWebApplicationContext();
        applicationContext.registerBean(HelloController.class);
        applicationContext.registerBean(SimpleHelloService.class);
        applicationContext.refresh();

        // 내장 톰캣 서버를 생성하고 설정까지 하는 클래스이다.
        // 커스텀할때 사용할 수 있다
        TomcatServletWebServerFactory serverFactory = new TomcatServletWebServerFactory();

        // 실제 웹 서버의 인스턴스를 가져와서 어플리케이션을 실행할 준비를 한다.
        // 메소드가 하나인 ServletContextInitializer()를 통해 사용이 가능하다
        WebServer webServer = serverFactory.getWebServer(servletContext -> {
            servletContext.addServlet("dispatcherServlet", new DispatcherServlet(applicationContext))
                    .addMapping("/*");
        });

        // 서버 시작
        webServer.start();
    }

}
