import com.guojx.dao.AccountDao;
import com.guojx.domin.Account;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;
import java.sql.SQLException;
import java.util.List;

public class TestMybatis {
    @Test
    public void run1() throws IOException, SQLException {
        //加载配置文件
        InputStream in = Resources.getResourceAsStream("SqlMapConfig.xml");
        //创建sqlsessionfactory对象
        SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(in);
        //创建sqlsession对象
        SqlSession sqlSession = factory.openSession();
        AccountDao accountDao = sqlSession.getMapper(AccountDao.class);
        List<Account> listAccount = accountDao.FindAll();
        for(Account account : listAccount){
            System.out.println(account);
        }
        sqlSession.close();
        in.close();
    }

    @Test
    public void run2() throws IOException, SQLException {
        Account account = new Account();
        account.setName("dog");
        account.setMoney(400d);
        //加载配置文件
        InputStream in = Resources.getResourceAsStream("SqlMapConfig.xml");
        //创建sqlsessionfactory对象
        SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(in);
        //创建sqlsession对象
        SqlSession sqlSession = factory.openSession();
        AccountDao accountDao = sqlSession.getMapper(AccountDao.class);
        //保存
        accountDao.SaveAccount(account);
        //提交事务
        sqlSession.commit();
        sqlSession.close();
        in.close();
    }
}
