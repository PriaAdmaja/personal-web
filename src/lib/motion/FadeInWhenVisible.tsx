import { motion } from "framer-motion";

function FadeInWhenVisible({ children }: {children: JSX.Element}) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }

  export default FadeInWhenVisible