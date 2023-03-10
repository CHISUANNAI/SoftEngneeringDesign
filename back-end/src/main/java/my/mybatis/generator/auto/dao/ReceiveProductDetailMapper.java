package my.mybatis.generator.auto.dao;

import java.util.List;
import my.mybatis.generator.auto.entity.ReceiveProductDetail;
import my.mybatis.generator.auto.entity.ReceiveProductDetailExample;
import org.apache.ibatis.annotations.Param;

public interface ReceiveProductDetailMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table receive_product_detail
     *
     * @mbg.generated Thu Jul 21 21:11:49 GMT+08:00 2022
     */
    long countByExample(ReceiveProductDetailExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table receive_product_detail
     *
     * @mbg.generated Thu Jul 21 21:11:49 GMT+08:00 2022
     */
    int deleteByExample(ReceiveProductDetailExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table receive_product_detail
     *
     * @mbg.generated Thu Jul 21 21:11:49 GMT+08:00 2022
     */
    int deleteByPrimaryKey(Integer subReceiveid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table receive_product_detail
     *
     * @mbg.generated Thu Jul 21 21:11:49 GMT+08:00 2022
     */
    int insert(ReceiveProductDetail row);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table receive_product_detail
     *
     * @mbg.generated Thu Jul 21 21:11:49 GMT+08:00 2022
     */
    int insertSelective(ReceiveProductDetail row);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table receive_product_detail
     *
     * @mbg.generated Thu Jul 21 21:11:49 GMT+08:00 2022
     */
    List<ReceiveProductDetail> selectByExample(ReceiveProductDetailExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table receive_product_detail
     *
     * @mbg.generated Thu Jul 21 21:11:49 GMT+08:00 2022
     */
    ReceiveProductDetail selectByPrimaryKey(Integer subReceiveid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table receive_product_detail
     *
     * @mbg.generated Thu Jul 21 21:11:49 GMT+08:00 2022
     */
    int updateByExampleSelective(@Param("row") ReceiveProductDetail row, @Param("example") ReceiveProductDetailExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table receive_product_detail
     *
     * @mbg.generated Thu Jul 21 21:11:49 GMT+08:00 2022
     */
    int updateByExample(@Param("row") ReceiveProductDetail row, @Param("example") ReceiveProductDetailExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table receive_product_detail
     *
     * @mbg.generated Thu Jul 21 21:11:49 GMT+08:00 2022
     */
    int updateByPrimaryKeySelective(ReceiveProductDetail row);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table receive_product_detail
     *
     * @mbg.generated Thu Jul 21 21:11:49 GMT+08:00 2022
     */
    int updateByPrimaryKey(ReceiveProductDetail row);
}